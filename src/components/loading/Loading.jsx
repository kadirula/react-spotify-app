import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Loading = ({loading}) => {
    return (
        <>
            <PuffLoader
                color='#1ed760'
                loading={loading}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    )
}

export default Loading