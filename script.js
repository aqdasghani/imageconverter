const uploadInput = document.getElementById('upload');
const formatSelect = document.getElementById('format');
const convertButton = document.getElementById('convertBtn');


convertButton.addEventListener('click', ()=>{
    const file = uploadInput.files[0];
    const format = formatSelect.value;

    if(!file){
        alert("Please upload HEIC file first.");
        return;
    }

    console.log("File uploaded successfully", file);
    console.log("Convert to format", format);

    let outputMimeType = formatSelect === "png" ? "image/png" : "image/jpeg";

heic2any(
    {
        blob : file,
        toType : outputMimeType
    }
)

.then((convertedBlob)=>{
    console.log("Conversion succesful", convertedBlob)

    const url = URL.createObjectURL(convertedBlob);
const a = document.createElement("a");
a.href = url; 
a.download = `convertedImage.${format}`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
    
})

.catch((error) => {
    console.error("Conversion failed:", error);
})


})

