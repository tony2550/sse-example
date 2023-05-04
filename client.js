const eventSourse = new EventSource("http://localhost:8070/alarm");

function updateMessage(message) {
  const list = document.getElementById("eventmessages");
  const item = document.createElement("p");
  item.textContent = message;
  list.appendChild(item);
}

eventSourse.onmessage = function (e) {
  updateMessage(e.data);
};

eventSourse.onerror = function (e) {
  updateMessage("서버와 연결이 종료되었습니다.");
  eventSourse.close();
};
