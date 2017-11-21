 $(document).ready(function () {
		$.ajax({
			type: "get",
			url: "https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json",
			data: { nome: $("#estados").val() },
			dataType: 'json',
			success: function (obj) {
				if (obj != null) {
					var data = obj.estados;
					var selectbox = $("#estados");
					selectbox.find('option').remove();
					$.each(data, function (i, d) {
						$('<option>').val([i]).text(d.nome).appendTo(selectbox);
					});
				}
			}
		});
	});

	$("#estados").change(function () {
		$.ajax({
			type: "get",
			url: "https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json",
			data: { nome: $("#cidades").val() },
			dataType: 'json',
			success: function (obj) {
				if (obj != null) {
					var data = obj.estados;
					var selectbox = $("#cidades");
					selectbox.find('option').remove();
					$.each(data[$("#estados").val()].cidades, function (i, d) {
						$('<option>').val([i]).text(d).appendTo(selectbox);
					});
				}
			}
		});
	});
	