var table19 = {
    footer: `<div style="text-align:justify !important;font-style: italic;">Note that other, nonrenal considerations such as drug interactions may also apply. The gray area indicates doses not studied in the pivotal clinical trials of these agents.
*If at least 2 of the following are present: serum creatinine ≥1.5 mg/dL, age ≥80 y, or body weight ≤60 kg, the recommended dose is 2.5 mg twice daily. The ARISTOTLE trial excluded patients
with either a creatinine of >2.5 mg/dL or a calculated CrCl <25 mL/min.</div>`,
    header: `<b>Recommended Doses of Currently Approved DOACs According to Renal Function<br>CrCl (mL/min)</b>`,
    contents: `<hr> <table class="table banded">
            <tr>
                <th>DOAC</th>
                <th>>95</th>
                <th>51-95</th>
                <th>31-50</th>
                <th>15-30</th>
                <th><15 or on dialysis</th>
            </tr>
            <tr>
              <td class="bold">Apixaban</td>
              <td>5 or 2.5 mg twice daily*</td>
              <td>5 or 2.5 mg twice daily*</td>
              <td>5 or 2.5 mg twice daily*</td>
              <td>5 or 2.5 mg twice daily*</td>
              <td>5 or 2.5 mg twice daily*</td>
            </tr>
            <tr>
              <td class="bold">Dabigatran</td>
              <td>150 mg twice daily</td>
              <td>150 mg twice daily</td>
              <td>150 mg twice daily</td>
              <td>75 mg twice daily</td>
              <td>Contraindicated</td>
            </tr>
            <tr>
              <td class="bold">Edoxaban</td>
              <td>Contraindicated</td>
              <td>60 mg once daily</td>
              <td>30 mg once daily</td>
              <td>30 mg once daily</td>
              <td>Contraindicated</td>
            </tr>
            <tr>
              <td class="bold">Rivaroxaban</td>
              <td>20 mg once daily</td>
              <td>20 mg once daily</td>
              <td>15 mg once daily</td>
              <td>15 mg once daily</td>
              <td>15 mg once daily†</td>
            </tr>
            </table>
            <hr>`
}

var table8 = {
    contents: `<div><b>Three Validated Risk Models for Stroke</b></div>
        <hr>
    <table class="table banded table8">
  <tr>
    <th class="large-4">Risk Factor</th>
    <th class="large-2.1">CHA₂DS₂-VASc</th>
    <th class="large-2">ATRIA</th>
    <th class="large-3">GARFIELD</th>
  </tr>
  <tr>
    <td>Age ≥85 y</td>
    <td></td>
    <td>6</td>
    <td>0.98</td>
  </tr>
  <tr>
    <td>Age ≥75 y</td>
    <td>2</td>
    <td>5</td>
    <td>0.59</td>
  </tr>
  <tr>
    <td>Age 65-74 y</td>
    <td>1</td>
    <td>3</td>
    <td>0.20</td>
  </tr>
  <tr>
    <td>Female sex</td>
    <td>1</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td>Hypertension</td>
    <td>1</td>
    <td>1</td>
    <td>0.16</td>
  </tr>
  <tr>
    <td>Renal disease</td>
    <td></td>
    <td>1</td>
    <td>0.35</td>
  </tr>
  <tr>
    <td>Diabetes</td>
    <td>1</td>
    <td>1</td>
    <td>0.21</td>
  </tr>
  <tr>
    <td>Current smoking</td>
    <td></td>
    <td></td>
    <td>0.48</td>
  </tr>
  <tr>
    <td>Congestive heart failure</td>
    <td>1</td>
    <td>1</td>
    <td>0.23</td>
  </tr>
  <tr>
    <td>Previous stroke or TIA</td>
    <td>2</td>
    <td>2-8*</td>
    <td>0.80</td>
  </tr>
  <tr>
    <td>Vascular disease</td>
    <td>1</td>
    <td></td>
    <td>0.2</td>
  </tr>
  <tr>
    <td>Dementia</td>
    <td></td>
    <td></td>
    <td>0.51</td>
  </tr>
  <tr>
    <td>Previous bleeding</td>
    <td></td>
    <td></td>
    <td>0.30</td>
  </tr>
  <tr>
    <td>Proteinuria</td>
    <td></td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td>Low risk score</td>
    <td>0</td>
    <td>0-5</td>
    <td>0-0.89</td>
  </tr>
  <tr>
    <td>Intermediate risk score</td>
    <td>1</td>
    <td>6</td>
    <td>0.90-1.59</td>
  </tr>
  <tr>
    <td>High risk score</td>
    <td>≥2</td>
    <td>7-15</td>
    <td>≥1.60</td>
  </tr>
  <tr>
    <td>C-index (11)</td>
    <td>0.63</td>
    <td>0.66</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C-index (13)</td>
    <td>0.67</td>
    <td>-</td>
    <td>0.71</td>
  </tr>
</table>
<hr>
<div style="text-align:justify !important;">*8 points if age <65 y; 4 points if age 65-74 y; 2 points if age 75-84 y; and 3 points if ≥85 y.</div>
<hr>
<div style="text-align:justify !important;">ATRIA indicates Anticoagulation and Risk Factors in Atrial Fibrillation: anemia, renal disease, elderly (age ≥75 y), any previous bleeding, hypertension; CHA₂DS₂-VASc, indicates congestive heart failure, hypertension, age ≥75 y (doubled), diabetes mellitus, prior stroke or transient ischemic attack or thromboembolism (doubled), vascular disease, age 65 to 74 y, sex category; GARFIELD-AF, Global Anticoagulant Registry in the Field-Atrial Fibrillation; and TIA, transient ischemic attack.</div>
  `
}