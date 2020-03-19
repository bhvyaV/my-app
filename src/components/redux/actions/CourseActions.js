export function createCourse(course) {
  return {
    type: "CREATE_COURSE",
    course: course
  }; // course can be written as single course called as short hand as it same both sides in object
}
