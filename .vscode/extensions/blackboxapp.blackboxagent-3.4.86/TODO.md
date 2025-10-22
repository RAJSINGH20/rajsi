# TODO: Add console logs for model ID in AI requests

## Tasks:
- [x] Update src/api/controller/llm-controller.ts to add console.log for model ID
- [x] Update src/core/blackbox.ts to add console.log for model ID when creating streams
- [x] Test the changes by making an AI request
- [x] Verify console logs are working properly

## Completed Changes:

### 1. LLM Controller (`src/api/controller/llm-controller.ts`):
- Line 206: Added console.log to print model ID when handling external requests
- Line 244: Added console.log to print model ID when starting stream processing

### 2. Blackbox Core (`src/core/blackbox.ts`):
- Line 1653: Added console.log for condensation stream with model ID
- Line 2912: Added console.log for edit stream with model ID  
- Line 3611: Added console.log for planning stream with model ID
- Line 3650: Added console.log for exploration stream with model ID
- Line 3693: Added console.log for clarification stream with model ID
- Lines 3738, 3783: Added console.log for detailed planning streams with model ID
- Line 1789: Added console.log for main API request stream with model ID

All console logs follow the pattern: `[Component] AI Request - Description with Model ID: {modelId}`

This will help with debugging and tracking which model is being used for each AI request in the response data.
