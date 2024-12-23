import { downloadVideo } from './src/api/downloadService.js';
import { createModal } from './src/components/modal.js';

const videoUrlInput = document.getElementById('videoUrl');
const downloadBtn = document.getElementById('downloadBtn');
const statusDiv = document.getElementById('status');
const modal = createModal();

async function handleDownload(url, fim) {
  try {
    statusDiv.textContent = 'Downloading...';
    statusDiv.className = 'status';
    downloadBtn.disabled = true;

    const pasta = document.querySelector("#genreSelect").value;

    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = parseInt(date.getMonth()) + 1;

    const response = await downloadVideo(url, pasta, year, month, day);
    
    if(fim){
      modal.show(
        'Download Complete',
        response.message,
        response.filePath
      );
    }
    
    statusDiv.textContent = '';
  } catch (error) {
    if(fim){
      modal.show(
        'Error',
        `Download failed: ${error.message}`,
        ''
      );
    }
  } finally {
    downloadBtn.disabled = false;
  }
}

downloadBtn.addEventListener('click', () => {
  const url = videoUrlInput.value.trim();
  if (!url) {
    modal.show('Error', 'Please enter a valid URL', '');
    return;
  }

  // Baixando uma lista de videos
  const aListaVideos = getListaVideos();

  const total = aListaVideos.length;
  console.log("total de videos: " + total);

  aListaVideos.forEach(function(data){
    console.log(data);
    const url = data.url;

  });

  console.log("url: " + url);

  // handleDownload(url);
});

videoUrlInput.addEventListener('input', () => {
  statusDiv.textContent = '';
});

function getListaVideos(){
  return [
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=3zNabdrryYM"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=9Vt4XguN2-A"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=DQutkZCWAlc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=Uq9cEVLPFAo"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=7t5mi3M_lAY"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=VkTZW65scSY"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=acfpoa3zsyE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=T4fbRCnal7k"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=5kw9_Hlh3DI"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=-pwc9VOIruk"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=ZsN_0_6yEXk"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=Br2rofxz_C0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=e1bOjcWDYyI"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=oqXETHqkf4s"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=_emKD9Pz1WY"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=wGk7CTp8EJs"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=a3FDFSMz5JQ"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=3wbUs7LZyzE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=-f3W2kpaqEg"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=AWVplheLOWM"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=3krmcL9NAlU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=E9HikWB9c60"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=rh7bpHMRrS4"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=LfrllMKr7Cw"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=KnXuj5peT8k"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=-ovQ3j_LG_c"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=CH8-4BbYSf4"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=qw4TgU8VO84"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=-rP6yf12OBc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=dg5x0MOqk7g"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=foDr_Xvl86A"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=KgIiEuChZq0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=fzuVtoimQ5c"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=sZ57e3pkvpE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=bw8AKEyIq1I"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=Muo3F10dAcw"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=L864FpjXp10"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=TOFnMndGhco"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=WBprY3YMUgQ"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=vA2W3-MfuQE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=tricJyqIJro"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=1AvhT_dP79U"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=Ru5XpLNE1wk"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=CdNOFSBexQA"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=WuiNLPjTc_U"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=_I6rcvzXUE0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=MZq2qagJPl8"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=DXCEZBzpOTc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=3mHQ7a_fOy8"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=aQm7-iIOgWs"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=SGFTycytYew"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=0lD2t5ECLyM"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=rcraRvSMKxc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=FeD9wvOq1yY"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=PTXfvi1e4eA"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=vVI4LLMnWpA"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=Wak8P2ysPYQ"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=bHT5GvYi6io"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=NVdXeDY9Rsg"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=qVzR5I6Qnzo"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=aR-V1qi_W_M"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=9ARLdBpPgxk"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=DB6-B_vtwuQ"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=1lVrYNhUkJg"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=4ttLbwjkEpw"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=v59WhF2GtcM"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=h09p0IGiKaE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=P0yOu28h90k"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=K-plmJye_eU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=CVZhBTOdN04"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=TdOgpkzGQGs"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=unVjavUvGmc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=QxZFjShiXhA"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=RmF459L-lx0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=1ykTwSRzwK4"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=iqskXpXy7lI"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=3tLM9w9HIK4"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=-cMjRtqzeZE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=le6Kxt_cvH8"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=En2E6tDDSd0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=9VDIhnxuqp0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=QRpTi1uvc_0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=7sqvbH_ONcc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=mWPEpnJWQUI"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=juAQmHJ0t_c"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=IFdMqOi5tkU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=derAGtWG6aE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=7zkhceLri90"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=SRUA4YOn8ks"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=AHLm1DczUrU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=aCP-5pzJq9A"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=yC3spv8O3W4"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=CAxwb71fYp8"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=2RddhWVaNUU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=PhMK6OJvueI"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=UBCXv64t0rU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=6Q9hRIWz88U"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=R1q92ckdx58"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=prlj63ptr4k"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=jPR72yxzCSU"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=lykVqTAMVbo"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=ba55v84Ohk0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=3NNKqvtuWLE"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=KPQkb2AuXSw"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=LXFMvF7d6zc"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=32Oojw7ndr8"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=2OutJUdvwGY"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=ZVCmjM_kLBY"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=oD9izvb3gO0"},
    {"ano":"2024", "mes":"12","categoria":"sertanejo", "url":"https://www.youtube.com/watch?v=8cZC3uqRJD4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=90RLzVUuXe4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=7kPYLQnxAiU"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=zFMYL0XQ3lA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=OiC1rgCPmUQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=iz1rIp1-b-Y"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=JMtack-i2vw"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=ZDZiXmCl4pk"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=To4SWGZkEPk"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=okOHvVWYUkg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=YV8P4aEXzMU"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=12hvoJL75jo"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=dSDbwfXX5_I"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=TDPcEGi3D1E"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=r6vz9ym3Qso"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=1F2SRlSbwK4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=57VMB1IzLKY"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=CMOVbGQlTaM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=ilIpmQYPXA8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=evJ6gX1lp2o"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=qik_1dDvzEs"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=suAR1PYFNYA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=YBGtzfK5Bak"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=GfQhDXm30mA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=etOq30rF0gE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=p6Cnazi_Fi0"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=PoP2Sa7wYNQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=hAx6mYeC6pY"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EXIWlRrkjKE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=dQNn6AGUsGM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=qVqFuokjRMc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=ZjBZ8MUnB0E"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=u9n7Cw-4_HQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=RAR9xfCeIXg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=S2TaAcwC_zI"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=qod03PVTLqk"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EPVdGy9SBHI"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=eK7RJAzhLVM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=_G1cVDy0fTg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=yiVJ4Hv5_UE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=1_4ELAxKrDc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=17gaGtbSND8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=N-4YMlihRf4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=tyITL_exICo"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=zyln2WuD5jE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=BMFNN40fNp0"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=KLu7QyEpdBM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=1NFv_tZOonw"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=OutlyuZFOWM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=M26V1IWAP-E"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=vSzJTIFHI1I"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=D64a2fb72sE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EHby74kKc4s"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=oDF1j-y6J-k"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=AE0mg-WbJEg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=FFV6t4Dl_zQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=SpIgOm5vFkE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=Qhadv8gwTdo"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=Yk7u5yHth_c"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=V0woPCb5xk8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=2Oc6LdaUiZE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=fCZVL_8D048"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=NhCxrUEW3PM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EduKwPu-6eY"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=zrB8wB49z7c"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=CRuOOxF-ENQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=HIv3ClkEhrA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=uJ0zyWzLW70"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=mD2a9YzKV3w"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=t5Da9RjQDgM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=on_IPWtYdc0"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=KsASkh130dA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=2zToEPpFEN8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EP7tQnu2gmE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EXOESyNOJhQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=DfZi1Z5ZoXw"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=drzHwf4X_b0"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=fVuw7VCefME"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=U6n2NcJ7rLc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=2aJfC8JR2No"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=e7HBypw4lhY"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=cKhaAUQx74o"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=VElre5GhyV4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=89degLrNZM8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=9hbu9toStfc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=XzLGcLw3cHc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=rfxnmIPCzIc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=dbJ55eUlw3A"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=v7ADTKFbUDs"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=7Xfwu8NH1iI"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=QH2a6V-W87U"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=kGT73GcwhCU"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=zqyEwjFid0c"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=U7-dxzp6Jvs"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=taSubkjZUA4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=4hu5iCqQVcM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=cZwYpAh3bXQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=uruccxh9bkQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=YH18coS7c9E"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=MveDLwDIZiI"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=cZSoOQ-7Cuc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=76Nq-XO5K8I"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=6PcsC-h-Pfw"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=BsPG5WLCce8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=RT2No1vusjg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=nPclk7MdqVo"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=yMJswjcD8Fg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=sOaxnRClzPw"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=4OQXypvaG_s"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=FaA1-weqWgg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=_QiKAN2LIuk"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=arghOOwtW30"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=0Kx3sobEBFE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=8d9Ma7vp7Sc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=UHjkKNvso3s"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=RlaBTqv8tQs"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=yA_KCHCkwCo"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=ebGUw4AOOQg"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=3ys32BP2LjQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=EdWhjJGTe8w"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=CGL_7-QaTiY"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=HLtDoGsptf4"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=9LEvJ9kCoZc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=6_-nfCSz8YQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=sCz5y84dwuA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=1JPNFp0f53I"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=jIoEaTN7GGo"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=n5F-4Dd0LwU"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=7x5lqqji9ww"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=a9cyG_yfh1k"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=SjqmSPZhF3s"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=QzakjlbO2Lc"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=kYHoSET3SGU"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=2_4GPkYFUKM"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=WtyM2BxVHXQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=4DPCHufDWJQ"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=m-8bstxuOeY"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=tb5MYhF2nwE"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=o9Bgl8HUFZA"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=3OSYEUBsH-8"},
    {"ano":"2024", "mes":"12","categoria":"dance", "url":"https://www.youtube.com/watch?v=8VOQzSNfLqo"}
  ];
}