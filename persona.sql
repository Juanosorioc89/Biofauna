CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  ciudad VARCHAR(50),
  departamento VARCHAR(50),
  actividad VARCHAR(50),
  horarios VARCHAR(50),
  fechaInicio DATE,
  acepta_informacion BOOLEAN,
  acepta_coordinacion BOOLEAN
);
