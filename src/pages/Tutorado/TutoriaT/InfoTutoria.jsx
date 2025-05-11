const InfoTutoria = () => {
  const tutoria = {
    id: 1,
    nombreTutoria: "Tutoria 1",
    tutor: "Juan Pérez",
    fecha: "2023-10-01",
    hora: "10:00",
    cuposDisponibles: 5,
    ubicacion: "Aula 101",
    descripcion: "Descripción de la tutoría 1",
  };

  const datos = [
    { label: "Nombre", value: tutoria.nombreTutoria },
    { label: "Tutor", value: tutoria.tutor },
    { label: "Fecha", value: tutoria.fecha },
    { label: "Hora", value: tutoria.hora },
    { label: "Cupos Disponibles", value: tutoria.cuposDisponibles },
    { label: "Ubicación", value: tutoria.ubicacion },
    { label: "Descripción", value: tutoria.descripcion },
  ];

  return (
    <div className="info-tutoria">
      <div className="tutoria-card">
        {datos.map((item, index) => (
          <p
            key={index}
            className={index % 2 === 0 ? 'fondo-gris' : 'fondo-gris-claro'}
          >
            {item.label}: {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoTutoria;
