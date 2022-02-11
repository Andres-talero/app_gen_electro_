import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';

const FormatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'del' yyyy", {locale: es});
}
 
export default FormatearFecha;