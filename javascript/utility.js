const stringifyDate = (date) =>{
    const options = {day: 'numberic', month:'short',year:'numeric'};
    const newDate = !Date ? "undefined":
    new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
}