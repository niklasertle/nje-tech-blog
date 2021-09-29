module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
          new Date(date).getFullYear()
        }`;
      },
    if_equals: (userId, postId) => {
      if (userId == postId) {
        return true;
      } else {
        return false;
      }
    }
}