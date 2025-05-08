export interface MyCoolButtonProps {
    title: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
} 