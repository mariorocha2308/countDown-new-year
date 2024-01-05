export const currentDay: string = new Date().toLocaleString('en-us',{month:'short', day:'numeric'})
export const currentYear: number = new  Date().getFullYear()
export const currentMonth: number = new  Date().getMonth()

export const animateSlideDown = {
  y: ["4rem", "0rem"],
  x: ["0rem", "4rem"],
}

export const animateSlideUp = {
  y: ["0rem", "4rem"],
  x: ["4rem", "0rem"],
}

export const transition1 = {
  duration: 4,
  repeatType: "reverse",
  repeat: Infinity,
  easeIn: [0.17, 0.67, 0.83, 0.67],
};

export const transition2 = {
  repeatType: "reverse",
  repeat: Infinity,
  delay: 1,
  type: "spring", stiffness: 20
};

export const transition3 = {
  repeatType: "reverse",
  repeat: Infinity,
  duration: 13,
  type: "tween"
};