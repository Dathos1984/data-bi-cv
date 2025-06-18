.PHONY: examples

CC = xelatex
BASE_DIR = src
RESUME_DIR = src/resume
CV_DIR = src/cv
RESUME_SRCS = $(shell find $(RESUME_DIR) -name '*.tex')
CV_SRCS = $(shell find $(CV_DIR) -name '*.tex')

examples: $(foreach x, coverletter cv resume, $x.pdf)

resume.pdf: $(BASE_DIR)/resume.tex $(RESUME_SRCS)
	$(CC) -output-directory=$(BASE_DIR) $<

cv.pdf: $(BASE_DIR)/cv.tex $(CV_SRCS)
	$(CC) -output-directory=$(BASE_DIR) $<

coverletter.pdf: $(BASE_DIR)/coverletter.tex
	$(CC) -output-directory=$(BASE_DIR) $<

clean:
	rm -rf $(BASE_DIR)/*.pdf
