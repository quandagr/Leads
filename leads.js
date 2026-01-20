const url = "https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/leads";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2dmZ2hycHNpYWliemJqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTk1MDEsImV4cCI6MjA4MDM3NTUwMX0.Oli4Picy3nPZlxj0KUycXEyI2fu4AXiYJoKzg9TUh0Q";



async function createleads() {
            event.preventDefault();

            const id = document.getElementById('id').value;
            const email = document.getElementById('email').value;
            const interest_messaging = document.getElementById('interest_messaging').value;

            let leads = {
                 id,
                contact_email: email,
                interest_messaging
            };
          
          
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apikey,
                },
                body: JSON.stringify(leads),
            });
            console.log(response);
            if(response.status !== 201){
                document.getElementById('result').innerText = "Error creating lead: " + response.statusText;
                return;
            }else{

            document.getElementById("result").innerText = "Lead created with ID: " + result.id;
        }
    }
        async function getleads() {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apikey,
                },
                
            });
            const leads = await response.json();
            let leadsdata = document.getElementById('leadsdata');
            leadsdata.innerHTML = '';
            leads.forEach(lead => {
                leadsdata.innerHTML += `<tr>
                <td>${lead.id}</td>
                <td>${lead.contact_email}</td>
                <td>${lead.interest_messaging}</td>
                </tr>`;
            });
          }
   

       
        
               