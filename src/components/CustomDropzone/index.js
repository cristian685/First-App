import React, {useState} from 'react'
import Dropzone from 'react-dropzone'

function DropzoneCustom(props) {
    const [binary, setBinary] = useState('');

    const handleOnDrop = (acceptedFiles) => {
        props.onChangeImage(acceptedFiles);
        const reader = new FileReader();
        FileReader.onerror = () => {
            reader.abort();
        }

        reader.onload = () => {
            setBinary(reader.result)
            console.log('redear', reader.result)
        }

        console.log('acceptedFiles', acceptedFiles)
    }
    return (
        <Dropzone onDrop={handleOnDrop}>
            {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}
export default DropzoneCustom;
