import React from 'react';
import { Checkbox, Grid, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../features/patientHistory';

const medications = ["Accupril", "Acebutolol", "Acetaminophen", "Adalat", "Advil", "Albuterol", "Allopurinol", "Alprazolam", "Altace", "Amitriptyline", "Amoxillin Amoxil", "Anaprox", "ASA", "Atenolol", "Ativan", "Atropine", "Bactrim", "Beclovent", "Benedryl", "Benylin", "Biaxin", "Captopril", "Cardizem", "Cialis", "Cimetidine", "Cipro", "Claritin", "Claritin", "Claritromycin", "Clonazepam", "Codeine", "Colace", "Coumadin",
	"Demerol", "Diabeta", "Diazepam", "Digoxin", "Dilantin", "Dilaudid", "Diltiazem", "Diphenhydramine", "EffexorErythromycin", "Endocet", "Ferrous sulphate", "Flonase", "Flovent", "Folic acid", "Furosemide", "Glucagon", "Glucophge", "Glyburide", "GLyburide", "Haldol", "Hmulin N", "Humulin R", "Hydrochlorothiazide", "Hydromorphone", "Ibuprofen", "Imodium", "Inderal", "Insulin", "Ipratropium", "Isoptin", "Keflex", "Lanoxin",
	"Lasix", "Levitra", "Lipitor", "Lopressor", "Lorazepam", "Losec", "Meperidine", "Metformin", "Methodone", "Metoprolol", "Minitran", "Morphine Sulphate", "Naprosyn", "Naproxen", "Naproxen", "Nasonex", "Nifedipine", "Nitroglycerin", "Oxazepam", "Oxycodone", "Oxycontin", "Paxil", "Penicillin", "Percocet", "Phenobarbital", "Phenobarbital", "Plavax", "Potassium Chloride", "Prednisone", "Premarin", "Prevacid", "Prilosex", "Procainamide",
	"Propranolol", "Pseudoephedrine", "Pulmicort", "Quinapril", "Quinidine", "Ramipril", "Ramipril", "Ranitidine", "Risperdal", "Salbutamol", "Slow-K", "Sudafed", "Synthroid", "Tagamet", "Tagamet", "Talwin", "Tegretol", "Tylenol", "Valium", "Vasotec", "Vasotec", "Ventolin", "Verapamil", "Verapamil", "Versed", "Viagra", "Warfarin", "Wellbutrin", "Xanax", "Xanax", "Zantac", "Zestril", "Zithromax", "Zoloft"];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	listbox: {
		width: '100%',
		maxHeight: '29rem',
		overflow: 'auto',
		backgroundColor: theme.palette.background.paper,
	},
}));


const Medications = ({ checked, setChecked }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const patientHistory = useSelector((state) => state.patientHistory.value)

	const handleChange = (e) => {
		dispatch(store({
			...patientHistory,
			[e.target.name]: e.target.value,
		}))
	}
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);

		dispatch(store({
			...patientHistory,
			Med_Name: newChecked,
		}))
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item container xs={12} md={6}>
					<Grid item xs={12}>
						<Typography>Medications (select all that are applicable)</Typography>
					</Grid>
					<FixedSizeList height={450} width="100%" itemSize={46} itemCount={medications.length}>
						{renderRow}
					</FixedSizeList>

				</Grid>
				<Grid item container xs={12} md={6}>
					<TextField
						label="Others / Comments"
						multiline
						fullWidth
						rows={22}
						variant="outlined"
						color="secondary"
						name="Med_Others"
						value={patientHistory.Med_Others}
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
		</div>
	)

	function renderRow(props) {
		const { index, style } = props;

		const value = medications[index]

		return (
			<ListItem style={style} key={index} role={undefined} dense button onClick={handleToggle(value)}>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={checked.indexOf(value) !== -1}
						tabIndex={-1}
						disableRipple
					/>
				</ListItemIcon>
				<ListItemText primary={value} />
			</ListItem>
		)
	}

}



export default Medications
