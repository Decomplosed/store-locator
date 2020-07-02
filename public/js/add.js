const storeForm = document.getElementById('store-form')
const storeId = document.getElementById('store-id')
const storeAddress = document.getElementById('store-address')

// Send POST to API to add store
async function addStore(e) {
  e.preventDefault()

  if (storeId.value.trim() === '' || storeAddress.value.trim() === '') {
    alert('Please fill in fields')
  }

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value,
  }

  try {
    const res = await fetch(`/api/v1/stores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendBody),
    })

    if (res.status === 400) {
      throw Error('Store already exists')
    }
  } catch (err) {
    alert(err)
  }
}

storeForm.addEventListener('submit', addStore)
