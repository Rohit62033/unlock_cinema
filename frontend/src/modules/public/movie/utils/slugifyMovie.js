export const slugifyMovie = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
};

// export const slugifyMovie = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, " ") 
//     .trim()                    
//     .replace(/\s+/g, "-");      
// };
