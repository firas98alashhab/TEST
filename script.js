function updateTime() {
  let now = new Date();
  let options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  document.getElementById("local-time").innerText = "Time: " + Intl.DateTimeFormat('en-UK', options).format(now);
}

setInterval(updateTime, 1000);