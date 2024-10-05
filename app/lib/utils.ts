/**
 * Get tapnisu's age
 * @returns tapnisu's age
 */
export function getAge() {
  const birthday = new Date("2007-11-03");
  const age = new Date(Date.now() - birthday.getTime()).getFullYear() - 1970;

  return age.toString();
}
