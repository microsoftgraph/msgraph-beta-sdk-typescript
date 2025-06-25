import { describe, it } from 'mocha';
import { expect } from 'chai';
import { createGraphBetaServiceClient } from '@microsoft/msgraph-beta-sdk';

// Simple mock request adapter for testing
class MockRequestAdapter {
    public baseUrl: string | undefined = undefined;
    
    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl;
    }
}

describe("GraphBetaServiceClient Base URL Tests", () => {
    it("should set default base URL to beta endpoint when undefined", () => {
        const mockAdapter = new MockRequestAdapter();
        
        // Call the function which should set the default base URL
        createGraphBetaServiceClient(mockAdapter as any);
        
        expect(mockAdapter.baseUrl).to.equal("https://graph.microsoft.com/beta");
    });

    it("should set default base URL to beta endpoint when empty string", () => {
        const mockAdapter = new MockRequestAdapter("");
        
        // Call the function which should set the default base URL
        createGraphBetaServiceClient(mockAdapter as any);
        
        expect(mockAdapter.baseUrl).to.equal("https://graph.microsoft.com/beta");
    });

    it("should not override existing base URL", () => {
        const customUrl = "https://custom.graph.endpoint.com/beta";
        const mockAdapter = new MockRequestAdapter(customUrl);
        
        // Call the function which should NOT override the existing URL
        createGraphBetaServiceClient(mockAdapter as any);
        
        expect(mockAdapter.baseUrl).to.equal(customUrl);
    });
});