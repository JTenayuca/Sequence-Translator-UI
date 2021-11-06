
  //DNA to Protein:
function DNAtoProtein(GenSeq) {
  //declare empty string
  let ProtSeq = "";
  //split string to array
  let seqArray = GenSeq.split("");
  console.log(seqArray);
  //map every three nucleotides to a codon
  for(let i=0; i < seqArray.length; i+= 3) {
    console.log(seqArray[i]);
    let codon = seqArray[i] + seqArray[i + 1] + seqArray[i + 2];
    console.log(codon);
    //switch statement to map codon to amino acid. Increment each amino acid character to ProtSeq string
    switch(codon) {
      case "ATA":
      case "ATT":
      case "ATC":
      ProtSeq += "I";
      break;

      case "CTT":
      case "CTC":
      case "CTA":
      case "CTG":
      case "TTA":
      case "TTG":
      ProtSeq += "L";
      break;

      case "GTT":
      case "GTC":
      case "GTA":
      case "GTG":
      ProtSeq += "V";
      break;

      case "TTT":
      case "TTC":
      ProtSeq += "F";
      break;

      case "ATG":
      ProtSeq += "M";
      break;

      case "TGT":
      case "TGC":
      ProtSeq += "C";
      break;

      case "GCT":
      case "GCC":
      case "GCA":
      case "GCG":
      ProtSeq += "A";
      break;

      case "GGT":
      case "GGC":
      case "GGA":
      case "GGG":
      ProtSeq += "G";
      break;

      case "CCT":
      case "CCC":
      case "CCA":
      case "CCG":
      ProtSeq += "P";
      break;

      case "ACT":
      case "ACC":
      case "ACA":
      case "ACG":
      ProtSeq += "T";
      break;

      case "TCT":
      case "TCC":
      case "TCA":
      case "TCG":
      case "AGT":
      case "AGC":
      ProtSeq += "S";
      break;

      case "TAT":
      case "TAC":
      ProtSeq += "Y";
      break;

      case "TGG":
      ProtSeq += "W";
      break;

      case "CAA":
      case "CAG":
      ProtSeq += "Q";
      break;

      case "AAT":
      case "AAC":
      ProtSeq += "N";
      break;

      case "CAT":
      case "CAC":
      ProtSeq += "H";
      break;

      case "GAA":
      case "GAG":
      ProtSeq += "E";
      break;

      case "GAT":
      case "GAC":
      ProtSeq += "D";
      break;

      case "AAA":
      case "AAG":
      ProtSeq += "K";
      break;

      case "CGT":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
      ProtSeq += "R";
      break;
      //stop codons:
      case "TAA":
      case "TAG":
      case "TGA":
      ProtSeq += ""
      break;
      //The * symbol indicates an invalid character
      default:
      ProtSeq += "*";

    }

  }
  return ProtSeq;
};

//A function for converting DNA to RNA and RNA to DNA
function convertNucleotides(GenSeq) {
  //split sequence into an array
  let seqArray = GenSeq.split("");
  console.log(seqArray);
  //check for T and U in sequence and interchange as necessary
  for (let i = 0; i < seqArray.length; i++) {
    if (seqArray[i] === "T") {
      seqArray[i] = "U"
    }
    else if(seqArray[i] === "U") {
      seqArray[i] = "T";
    }
  }
  //convert the sequence array back to a string and return it
  return seqArray.join("");
};

//A function for converting RNA to Protein
function RNAtoProtein(GenSeq) {
  //convert RNA sequence to DNA and store it in a variable:
 let RNAtoDNA = convertNucleotides(GenSeq);
 //take the resulting DNA sequence and convert it to protein and return the result:
  return DNAtoProtein(RNAtoDNA);
};

//A function for analyzing a sequence for palindromes:
function checkPalindrome(GenSeq) {
  let antisense = "";
  let DNA;
  let RNA;
  //convert sequence to array:
  let seqArray = GenSeq.split("");
  //Determine if sequence is DNA or RNA:
  for (let i = 0; i < seqArray.length; i++) {
    if (seqArray[i] === "T") {
      DNA = true;
      RNA = false;
    }
    else if (seqArray[i] === "U") {
      RNA = true;
      DNA = false;
    }
  }
  //loop through the Array and generate the antisense strand:
  for (let i = 0; i < seqArray.length; i++) {
    switch (seqArray[i]) {

      case "A":
        if (DNA === true) {
          antisense += "T"
        }
        else if (RNA === true) {
          antisense += "U"
        }

      break;

      case "T":
      antisense += "A"
      break;

      case "G":
      antisense += "C"
      break;

      case "C":
      antisense += "G"
      break;

      case "U":
      antisense += "A"
      break;

      default:
      null;
    }
  }

//reverse the antisense strand:
let strArray = antisense.split("");
let reverseAntisense = "";
for (let i = strArray.length -1; i >= 0; i--) {
    reverseAntisense += strArray[i];
  }
  if (reverseAntisense === GenSeq) {
    return true;
  }

  else {
    return false;
  }
};

//create event listener function:
function translate() {
  //retrieve the entered sequence from the textarea and store it in a variable:
  let Rawseq = document.getElementById("sequence").value;
  console.log(Rawseq);
  //convert the input to uppercase:
  let GenSeq = Rawseq.toUpperCase();
  console.log(GenSeq);
  //use conditional logic to run the function selected from the drop down menu
  //and place the result in the <h2> with id="sequence_output":
    if (document.getElementById("menu").value === "DNAtoProtein") {
        document.getElementById("sequence_output").innerHTML = DNAtoProtein(GenSeq);
        }

    else if (document.getElementById("menu").value === "DNAtoRNA" || document.getElementById("menu").value === "RNAtoDNA") {
        document.getElementById("sequence_output").innerHTML = convertNucleotides(GenSeq);
      }

    else if (document.getElementById("menu").value === "RNAtoProtein") {
      document.getElementById("sequence_output").innerHTML = RNAtoProtein(GenSeq);
    }
    else if(document.getElementById("menu").value === "checkPalindrome") {
      document.getElementById("sequence_output").innerHTML = checkPalindrome(GenSeq);
    }

    else {
      return null;
    }

};
//Add the event listener to the submit button:
document.getElementById("submit").addEventListener("click", translate, false);
