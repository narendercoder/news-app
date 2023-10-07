
export const formatDate = (date) =>{
    const formattedDate = date.toLocaleDateString("en-GB", { year: "numeric",  month: "2-digit", day: "2-digit", }).split("/").reverse().join("-");
    return formattedDate;
}


