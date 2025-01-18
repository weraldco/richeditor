import { FC } from 'react';
import {
	BiAlignLeft,
	BiAlignMiddle,
	BiAlignRight,
	BiBold,
	BiCodeAlt,
	BiCodeCurly,
	BiImage,
	BiItalic,
	BiListOl,
	BiListUl,
	BiStrikethrough,
	BiUnderline,
} from 'react-icons/bi';
import ToolButton from './ToolButton';

interface Props {}

const tools = [
	{
		task: 'bold',
		icon: <BiBold />,
	},
	{
		task: 'italic',
		icon: <BiItalic />,
	},
	{
		task: 'underline',
		icon: <BiUnderline />,
	},
	{
		task: 'strike',
		icon: <BiStrikethrough />,
	},
	{
		task: 'code',
		icon: <BiCodeAlt />,
	},
	{
		task: 'codeblock',
		icon: <BiCodeCurly />,
	},
	{
		task: 'left',
		icon: <BiAlignLeft />,
	},
	{
		task: 'center',
		icon: <BiAlignMiddle />,
	},
	{
		task: 'right',
		icon: <BiAlignRight />,
	},
	{
		task: 'orderList',
		icon: <BiListOl />,
	},
	{
		task: 'bulletList',
		icon: <BiListUl />,
	},
	{
		task: 'image',
		icon: <BiImage />,
	},
] as const;

const Tools: FC<Props> = () => {
	return (
		<div>
			{tools.map(({ icon, task }, i) => {
				return (
					<ToolButton
						key={i}
						// onClick={() => handleOnClick(task)}
						// active={
						// 	editor?.isActive(task) || editor?.isActive({ textAlign: task })
						// }
					>
						{icon}
					</ToolButton>
				);
			})}
		</div>
	);
};

export default Tools;
