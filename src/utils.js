import moment from "moment/moment";
export const analyze = (value) => {
  // convert into lowercase
  const text = value.toLowerCase();
  if (text.includes("hi") || text.includes("hello")) {
    return "Hi, How can i help you";
  } else if (text.includes("date")) {
    return moment().format("MMMM Do YYYY");
  } else if (text.includes("time")) {
    return moment().format("h:mm:ss a");
  } else if (text.includes("what is your name")) {
    return "ChatBot";
  } else if (text.includes("Best programming language")) {
    return "JavaScript";
  } else if (text.includes("country")) {
    return "Bangladesh";
  } else if (text.includes("company")) {
    return "Sheraspace Ltd";
  } else if (text.includes("thank you")) {
    return "Thank's for contacting me.";
  }
  return "Can't understand your message. Can you say again!";
};
