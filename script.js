$(document).ready(function () {
  $('.inputs').keyup(function () {
    $this = $(this)
    if ($this.val().length >= $this.data('maxlength')) {
      if ($this.val().length > $this.data('maxlength')) {
        $this.val($this.val().substring(0, 4))
      }
      $this.next('.inputs').focus()
    }
  })
})
