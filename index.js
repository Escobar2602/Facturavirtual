// function calcularTotales() {
//   const filas = document.querySelectorAll("#factura-body tr");
//   let total = 0;
//   filas.forEach((fila) => {
//     const precio = fila.querySelector(".precio").value || 0;
//     const cantidad = fila.querySelector(".cantidad").value || 1;
//     const subtotal = precio * cantidad;
//     fila.querySelector(".total").textContent = subtotal;
//     total += subtotal;
//   });
//   const transporte =
//     parseFloat(document.getElementById("transporte").value) || 0;
//   total += transporte;
//   document.getElementById("totalFinal").textContent = total.toLocaleString();
// }

// function agregarFila() {
//   const tbody = document.getElementById("factura-body");
//   const fila = document.createElement("tr");
//   fila.innerHTML = `
//         <td><input type="text" class="w-full border px-2" placeholder="Descripción" /></td>
//         <td><input type="number" class="w-full border px-2 precio" value="0" /></td>
//         <td><input type="number" class="w-full border px-2 cantidad" value="1" /></td>
//         <td class="px-4 total">0</td>
//       `;
//   tbody.appendChild(fila);
//   fila
//     .querySelectorAll("input")
//     .forEach((input) => input.addEventListener("input", calcularTotales));
// }

// document
//   .querySelectorAll("input")
//   .forEach((input) => input.addEventListener("input", calcularTotales));
// calcularTotales();

// function descargarPDF() {
//     calcularTotales(); // Asegura que los totales estén actualizados

//     const elemento = document.querySelector(".max-w-4xl");
//     const opciones = {
//       margin:       0.5,
//       filename:     'factura.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().set(opciones).from(elemento).save();
//   }