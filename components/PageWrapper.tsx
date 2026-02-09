type Props = {
    children: React.ReactNode;
};

export default function PageWrapper({ children }: Props) {
    return (
        <div className="fade-up">
            {children}
        </div>
    );
}
