import consumer from "channels/consumer"

// appRoomという変数に格納
const appRoom = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("receivedしたよー")
    // Called when there's incoming data on the websocket for this channel
    return alert(data["message"])
  },

  speak: function(message) {
    console.log("JavaScript側のspeakへ来たよー")
    return this.perform('speak', {message: message});
  }
});

window.document.onkeydown = function(event) {
  if(event.key == "Enter") {
    console.log("Enterを押したよー")
    appRoom.speak(event.target.value);
    event.target.value = "";
    event.preventDefault();
  }
}
