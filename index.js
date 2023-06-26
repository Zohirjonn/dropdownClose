  // Dropdown Close
  const dropdownBtn = document.querySelectorAll('[data-dropdown]')
  const dropdown = document.querySelectorAll('._dropdown')

  dropdownBtn.forEach(function (el) {
    el.addEventListener('click', function () {
      this.parentElement.toggleClass('_open')
      dropdownClose()
    })
  })

  function dropdownClose() {
    if (dropdown.length) {
      function dropdownRemoveClass(e) {
        dropdown.forEach(function (el) {
          if (el.classList.contains('_open')) {
            const isDropdown = e.target.closest('._dropdown')

            if (!isDropdown) {
              el.removeClass('_open')
            }

            escBtn(function () {
              el.removeClass('_open')
            })
          } else {
            document.removeEventListener('click', dropdownRemoveClass)
          }
        })
      }

      document.addEventListener('click', dropdownRemoveClass)
    }
  }
