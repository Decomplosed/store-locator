const storeForm = document.getElementById('store-form')
const storeId = document.getElementById('store-id')
const storeAddress = document.getElementById('store-address')

// Send POST to API to add store
function addStore(e) {
  e.preventDefault()

  if (storeId.value === '' || storeAddress.value === '') {
    alert('Please fill in fields')
  }
}

storeForm.addEventListener('submit', addStore)
