import { DAYS, DAYS_SHORT, MONTHS, MONTHS_SHORT } from '../constants/utilities';

export const dateTime = (date) => {
    if(!date) return null;
    let diff = Math.floor(((new Date())-(new Date(Date.parse(date))))/1000);
    if (diff <= 1) return "Neste instante";
    if (diff < 60) return `À ${diff} segundos`;
    if (diff <= 90) return `À 1 minuto`;
    if (diff <= 150) return `À 2 minutos`;
    if (diff <= 3540) return `${Math.round(diff/60)} minutos atrás`;
    if (diff <= 5400) return `1 hora atrás`;
    if (diff <= 86400) return `${Math.round(diff/3600)} horas atrás`;
    if (diff <= 129600) return `1 dia atrás`;
    return `${Math.round(diff/86400)} dias atrás`;
}

export const dateFormat = (format, date) => {
    if(!date || !format) return null;
    try {
        let auxDate = format;
        auxDate = auxDate.replace( '$Dn', ("0" + date.getDate()).slice(-2) );
        auxDate = auxDate.replace( '$Dl', DAYS_SHORT[date.getDay()] );
        auxDate = auxDate.replace( '$DL', DAYS[date.getDay()] );
        auxDate = auxDate.replace( '$Mn', ("0" + (date.getMonth()+1)).slice(-2) );
        auxDate = auxDate.replace( '$Ml', MONTHS_SHORT[date.getMonth()] );
        auxDate = auxDate.replace( '$ML', MONTHS[date.getMonth()] );
        auxDate = auxDate.replace( '$Yn', ("0" + date.getFullYear()).slice(-2) );
        auxDate = auxDate.replace( '$YN', date.getFullYear() );
        auxDate = auxDate.replace( '$hn', ("0" + date.getHours()).slice(-2) );
        auxDate = auxDate.replace( '$mn', ("0" + date.getMinutes()).slice(-2) );
        auxDate = auxDate.replace( '$sn', ("0" + date.getSeconds()).slice(-2) );
        return auxDate;
    } catch (error) {
        return null;
    }
}