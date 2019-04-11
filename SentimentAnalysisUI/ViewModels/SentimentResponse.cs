namespace SentimentAnalysisUI.ViewModels
{
    public class SentimentResponse
    {
        public string Status { get; set; }
        public int Code { get; set; }
        public string Message { get; set; }
        public SentimentResult Result { get; set; }
    }
}
