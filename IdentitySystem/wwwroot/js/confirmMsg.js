function confirmDelete(uniqueId , IsDeleteClicked) {

    var deleteSpan = 'deleteSpan_' + uniqueId;
    var confirmDeleteSpan = 'confimDeleteSpan_' + uniqueId;

    if (IsDeleteClicked)
    {
        $('#' + deleteSpan).hide();
        $('#' + confirmDeleteSpan).show();
    }
    else
    {
        $('#' + deleteSpan).show();
        $('#' + confirmDeleteSpan).hide();
    }
}