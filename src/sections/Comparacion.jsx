import { useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	scales
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Comparacion.css';
import { Data } from '../data/Data';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Comparacion = () => {
	const [data, setData] = useState(Data);
	const [fecha, setFecha] = useState([
		'2022-10-12',
		'2022-10-13',
		'2022-10-14',
		'2022-10-15',
		'2022-10-16',
		'2022-10-17',
		'2022-10-18',
		'2022-10-19',
		'2022-10-20',
		'2022-10-21'
	]);
	return (
		<div className="Container--Comparacion">
			<h1>Comparación</h1>
			{data.map((item) => {
				return (
					<div className="Container--Region">
						<Line
							data={{
								labels: fecha,
								datasets: [
									{
										label: 'Proyectada',
										data: item.Proyectado,
										fill: false,
										borderColor: 'rgb(75, 192, 192)',
										tension: 0.2
									},
									{
										label: 'Real',
										data: item.Real,
										fill: false,
										borderColor: 'rgb(255, 99, 132)',
										tension: 0.2
									}
								]
							}}
							options={{
								responsive: true,
								plugins: {
									title: {
										display: true,
										text: `Comparación de proyección y realidad región ${item.Region}`,
										font: {
											size: 20,
											weight: 'bold'
										},
										color: '#fff'
									},
									legend: {
										labels: {
											color: '#fff',
											font: {
												size: 15,
												weight: 'light'
											}
										}
									}
								},
								scales: {
									x: {
										ticks: {
											color: '#fff',
											font: {
												size: 10,
												weight: 'light'
											}
										}
									},
									y: {
										ticks: {
											color: '#fff',
											font: {
												size: 10,
												weight: 'light'
											}
										}
									}
								}
							}}
						/>
						<div className="Container--Info">
							<h2>Información</h2>
							<p>Diferencia por día:</p>
							<div className="Prueba">
								{item.Diferencia.map((dia, index) => {
									return (
										<span>
											Día {index + 1}: {dia}
										</span>
									);
								})}
							</div>
							<p>Porcentaje de error por día:</p>
							<div className="Prueba">
								{item.PorcentajeError.map((dia, index) => {
									return (
										<span>
											Día {index + 1}: {dia.toFixed(1)}%
										</span>
									);
								})}
							</div>
							<p>Promedio de error: {item.PromedioError}%</p>
							<p>Saturación real:</p>
							<div className="Prueba">
								{item?.SaturacionReal.map((dia, index) => {
									return (
										<span>
											Día {index + 1}: {dia.toFixed(3)}%
										</span>
									);
								})}
							</div>
							<p>Saturación proyectada:</p>
							<div className="Prueba">
								{item?.SaturacionProyectada.map((dia, index) => {
									return (
										<span>
											Día {index + 1}: {dia.toFixed(3)}%
										</span>
									);
								})}
							</div>
							<p>Camas necesarias:</p>
							<div className="Prueba">
								{item?.CamasNecesarias.map((dia, index) => {
									return (
										<span>
											Día {index + 1}: {dia}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Comparacion;
