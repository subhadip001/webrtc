let localStream;
let remoteStream;
let peerConnection;
const createOfferButton = document.getElementById("create-offer");
const createAnswerButton = document.getElementById("create-answer");
const addAnswerButton = document.getElementById("add-answer");

let servers = {
  iceServers: [
    {
      urls: ["stun:stun1.1.google.com:19302", "stun:stun2.1.google.com:19302"],
    },
  ],
};

let init = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  document.getElementById("user-1").srcObject = localStream;
};

let createPeerConnection = (sdpType) => {
  peerConnection = new RTCPeerConnection(servers);
  remoteStream = new MediaStream();
  document.getElementById("user-2").srcObject = remoteStream;

  localStream
    .getTracks()
    .forEach((track) => peerConnection.addTrack(track, localStream));

  peerConnection.ontrack = (event) => {
    event.streams[0]
      .getTracks()
      .forEach((track) => remoteStream.addTrack(track));
  };

  peerConnection.onicecandidate = async (event) => {
    if (event.candidate) {
      document.getElementById(sdpType).value = JSON.stringify(
        peerConnection.localDescription
      );
    }
  };
};

let createOffer = async () => {
  createPeerConnection("offer-sdp");

  let offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  document.getElementById("offer-sdp").value = JSON.stringify(offer);
};

createOfferButton.addEventListener("click", createOffer);

let createAnswer = async () => {
  createPeerConnection("answer-sdp");

  let offer = document.getElementById("offer-sdp").value;
  if (!offer) return alert("Please create offer first");

  offer = JSON.parse(offer);
  await peerConnection.setRemoteDescription(offer);

  let answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  document.getElementById("answer-sdp").value = JSON.stringify(answer);
};

createAnswerButton.addEventListener("click", createAnswer);

let addAnswer = async () => {
  let answer = document.getElementById("answer-sdp").value;
  if (!answer) return alert("Retieve answer from peer first");

  answer = JSON.parse(answer);
  if (!peerConnection.currentRemoteDescription) {
    await peerConnection.setRemoteDescription(answer);
  }
};

addAnswerButton.addEventListener("click", addAnswer);
init();
