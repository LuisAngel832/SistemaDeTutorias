import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import './CalendarioTutorado.css';
import { useTutoriasTutorado } from '../../hooks/useTutoriasTutorado';
import { useNavigate } from 'react-router-dom';

const CalendarioTutorado = () => {
  const { tutorias } = useTutoriasTutorado();
  const navigate = useNavigate();

  const handleEventClick = (info) => {
    const id = info.event.extendedProps.id;
    navigate(`/info-tutoria/${id}`);
  };

  const eventos = tutorias.map((tutoria) => {
    const fecha = tutoria.fecha;
    const hora = tutoria.hora;
    return {
      title: `📘 Tutoría de ${tutoria.tema}`,
      start: `${fecha}T${hora}`,
      end: `${fecha}T${hora}`,
      className: 'evento-personalizado',
      id: tutoria.id
    };
  });

  return (
    <div className="calendar-container">
      <h2>📅 Mis tutorías programadas</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        events={eventos}
        eventClick={handleEventClick}
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        height="auto"
      />
    </div>
  );
};

export default CalendarioTutorado;
