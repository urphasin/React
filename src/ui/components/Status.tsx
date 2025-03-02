type StatusProps = {
    status: string
}

const Status = (props: StatusProps) => {
    const { status } = props;
    return (
        <div>
        {status === "loading" && <h2>Loading...</h2>}
        {status === "success" && <h2>Data fetched successfully!</h2>}
        {status === "error" && <h2>Error fetching data</h2>}
        </div>
    );
};

export default Status