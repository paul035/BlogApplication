import CustomNavigationBar from "./CustomNavigationBar";
const Base = ({title = "Welcome to Blogging Application", children}) => {
    return (
        // p-0 & : padding = 0 and margin = 0
        <div className="container-fluid p-0 m-0">
            <CustomNavigationBar />
            {children}
        </div>
    );
}

export default Base;