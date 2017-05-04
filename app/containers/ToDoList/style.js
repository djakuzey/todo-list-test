import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
	todo_box: {
		width: '600px',
		margin: '0 auto',
		padding: '20px',
		border: '1px solid #66d466',
		borderRadius: '5px',
		marginTop: '100px',
	},

	create_task: {
		padding: '10px',
		marginBottom: '20px;',
	},
	
	btn_todo: {
		backgroundColor: '#66d466',
		outline: 'none',
		borderRadius: '5px',
		color: 'white',
		height: '30px',
		padding: '0 10px',
		margin: '0 5px',
	},
	
	task_list: {
		padding: '10px',
	},
	
	main: {
		borderRadius: '5px',
		padding: '10px',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '10px',
		alignItems: 'center',
		backgroundColor: '#c7e1ff',

	},
	
	sub_task: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px 10px 10px 20px',
	},

	input_text: {
		outline: 'none',
		marginBottom: '10px',
		paddingLeft: '10px',
		height: '30px',
		width: '100%',
		border: '1px solid #333',
		borderRadius: '5px',
	},

});