  

      const scriptURL = 'https://script.google.com/macros/s/AKfycbxrCio7BPNFxN0KgXzXI2-bWix5d4ZlMGHyGst_F-_HqMxpbQTI1DwxFy2iixLYd6fJeg/exec'
      const form = document.forms['submit-to-google-sheet']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>alert("Message Sent Successfully"),
                   alert("Message sent successfully"),
                    window.location.reload())
          .catch(error => console.error('Error!', error.message))

 
      })



 //google sheet link
  //https://script.google.com/macros/s/AKfycbxrCio7BPNFxN0KgXzXI2-bWix5d4ZlMGHyGst_F-_HqMxpbQTI1DwxFy2iixLYd6fJeg/exec