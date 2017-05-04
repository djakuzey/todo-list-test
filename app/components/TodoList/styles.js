import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({	
	btn_todo: {
		backgroundColor: '#66d466',
		
		borderRadius: '5px',
		color: 'white',
		height: '30px',
		padding: '0 10px',
		margin: '0 5px',
		outline: 'none',
	},
	
	task_done: {
		textDecoration: 'line-through',
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

	add_sub: {
		outline: 'none',
		marginBottom: '10px',
		paddingLeft: '10px',
		height: '30px',
		width: '75%',
		border: '1px solid #333',
		borderRadius: '5px',
	},
	
	sub_task: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px 10px 10px 20px',
	},
});