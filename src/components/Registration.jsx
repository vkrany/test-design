import axios from "axios";
import { Fragment, useState } from "react";
import "./Registration.css";

export const Registrations = () => {
	const [name, setName] = useState("");
	const [study, setStudy] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleNameChange = (value) => {
		setName(value);
	};

	const handleStudyChange = (value) => {
		setStudy(value);
	};

	const handleEmailChange = (value) => {
		setEmail(value);
	};

	const handlePhoneChange = (value) => {
		setPhone(value);
	};

	const handleSave = () => {
		const data = {
			Name: name,
			Phone: phone,
			Studu: study,
			Email: email,
			isActive: 1,
		};
		const url = "";
		axios
			.post(url, data)
			.then((result) => {
				alert(result.data);
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<Fragment>
			<div className="wrapper">
				<div className="wrapper_v2">
					<div className="title">Registrations</div>
					<br />
					<input
						className={"input_1"}
						onChange={(e) => handleNameChange(e.target.value)}
						type="text"
						id="txtName"
						placeholder="Введите ваше ФИО"
					/>
					<input
						className={"input_1"}
						onChange={(e) => handleStudyChange(e.target.value)}
						type="text"
						id="txtName"
						placeholder="Введите ваше учебное заведение"
					/>
					<input
						className={"input_1"}
						onChange={(e) => handleEmailChange(e.target.value)}
						type="email"
						id="txtName"
						placeholder="Введите ваш email"
					/>
					<input
						className={"input_1"}
						onChange={(e) => handlePhoneChange(e.target.value)}
						id="telNo"
						name="telNo"
						type="tel"
						placeholder="+7-(XXX)-XXX-XX-XX"></input>
				</div>
				<button onClick={() => handleSave()}>Submit</button>
			</div>
		</Fragment>
	);
};
