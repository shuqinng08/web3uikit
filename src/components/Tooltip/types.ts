export type Position = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    /**
     * Set children which should have a tooltip
     */
    children: Array<React.ReactNode> | React.ReactNode;

    /**
     * The tooltip ID will be generated if not assigned
     */
    id?: string;

    /**
     * Set the max width of the tooltip
     */
    maxWidth?: number;

    /**
     * Set position of tooltip
     */
    position: Position;

    /**
     * Set element/text that will be shown within the tooltip
     */
    content?: JSX.Element | string;
}
