const student = {
  name: "Phát",
  scores: {
    math: 8,
    english: 9
  }
};

// optional chaining
console.log(student?.scores?.math);   // 8
console.log(student?.scores?.science); // undefined (không lỗi)

// nullish coalescing
console.log(undefined ?? "Default"); // "Default"
console.log(0 ?? "Default");         // 0 (vì 0 không phải null/undefined)

console.log(student.scores.science ?? "Chưa có điểm");
