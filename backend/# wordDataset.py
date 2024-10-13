# wordDataset.py

class WordDataset:
    def __init__(self):
        # Hardcoded list of three-letter words
        self.words = [
            "cat", "dog", "bat", "rat", "hat", "mat", "fat", "log", "fog",
            "ant", "fan", "pan", "can", "van", "tap", "cap", "map", "nap",
            "sip", "tip", "zip", "bed", "red", "led", "fed", "set", "met"
        ]

    def get_words(self):
        """Return the list of three-letter words."""
        return self.words

    def count_words(self):
        """Return the count of three-letter words."""
        return len(self.words)

    def print_words(self):
        """Print the three-letter words."""
        for word in self.words:
            print(word)

if __name__ == "__main__":
    # Create an instance of WordDataset
    dataset = WordDataset()
    
    # Print the words
    print("Three-letter words in the dataset:")
    dataset.print_words()
    
    # Print the count of words
    print(f"\nTotal number of three-letter words: {dataset.count_words()}")