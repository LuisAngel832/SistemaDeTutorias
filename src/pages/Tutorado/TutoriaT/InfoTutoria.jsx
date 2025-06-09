const InfoTutoria = ({ tutoria }) => {
  if (!tutoria?.horario?.tutor || !tutoria?.materia) {
    return <p>Cargando información de la tutoría...</p>;
  }

  const formatearHora = (hora) => hora?.slice(0, 5);

  const datos = [
    { label: "ID Tutoría", value: tutoria.idTutoria },
    {
      label: "Tutor",
      value: `${tutoria.horario.tutor.nombre} ${tutoria.horario.tutor.apellidoP} ${tutoria.horario.tutor.apellidoM}`,
    },
    { label: "Materia", value: tutoria.materia.nombreMateria },
    { label: "Fecha", value: tutoria.fecha },
    {
      label: "Hora",
      value: `${formatearHora(tutoria.horario.horaInicio)} - ${formatearHora(tutoria.horario.horaFin)}`,
    },
    {
      label: "Cupos Disponibles",
      value: `${5 - (tutoria.tutorados?.length || 0)} disponibles`,
    },
    {
      label: "Ubicación",
      value: `Edificio ${tutoria.edificio}, Aula ${tutoria.aula}`,
    },
    { label: "Estado", value: tutoria.estado },
  ];

  return (
    <div className="info-tutoria">
      <div className="tutoria-card">
        {datos.map((item, index) => (
          <p
            key={item.label}
            className={index % 2 === 0 ? "fondo-gris" : "fondo-gris-claro"}
          >
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoTutoria;
