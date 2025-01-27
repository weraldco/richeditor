'use client';
import { FC } from 'react';
import RichEditor from '../RichEditor/RichEditor';

interface Props {}

const AddNewJournalForm: FC<Props> = () => {
	return (
		<div className="bg-blue-100">
			<RichEditor />
		</div>
	);
};

export default AddNewJournalForm;
