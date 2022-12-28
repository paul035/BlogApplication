const Base = ({title = "Welcome to Blogging Application", children}) => {
    return (
        <div className="container-fluid">
            <h1>Header</h1>
            {children}
            <h1>Footer</h1>

        </div>
    );
}

export default Base;